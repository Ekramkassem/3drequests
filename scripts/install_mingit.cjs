const https = require('https');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

async function getLatestMinGitUrl() {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.github.com',
      path: '/repos/git-for-windows/git/releases/latest',
      headers: { 'User-Agent': 'Node.js' }
    };
    https.get(options, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          const asset = json.assets.find(a => a.name.startsWith('MinGit-') && a.name.endsWith('-64-bit.zip'));
          if (asset) {
            resolve({ name: asset.name, url: asset.browser_download_url });
          } else {
            reject(new Error('No MinGit 64-bit asset found'));
          }
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadFile(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Download failed with status ${res.statusCode}`));
      }
      const fileStream = fs.createWriteStream(dest);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        resolve();
      });
    }).on('error', reject);
  });
}

async function main() {
  const targetDir = path.join(process.env.LOCALAPPDATA, 'MinGit');
  console.log('Target MinGit directory:', targetDir);
  
  const gitExe = path.join(targetDir, 'cmd', 'git.exe');
  if (fs.existsSync(gitExe)) {
    console.log('MinGit already exists at:', gitExe);
    return;
  }

  console.log('Fetching latest MinGit release from GitHub...');
  const asset = await getLatestMinGitUrl();
  console.log('Found:', asset.name);

  const zipPath = path.join(process.env.TEMP, asset.name);
  console.log('Downloading to:', zipPath);
  await downloadFile(asset.url, zipPath);
  console.log('Download complete.');

  console.log('Extracting to:', targetDir);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  // Use powershell Expand-Archive
  execSync(`powershell -NoProfile -Command "Expand-Archive -Path '${zipPath}' -DestinationPath '${targetDir}' -Force"`);
  console.log('Extraction complete! Git is ready at:', gitExe);
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
