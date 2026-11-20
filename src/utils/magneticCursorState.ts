export interface MagneticCursorState {
  active: boolean;
  mode: 'default' | 'project' | 'drag' | 'button';
  title?: string;
  category?: string;
  actionLabel?: string;
  targetPoint?: { x: number; y: number };
  magneticStrength?: number;
}

type Listener = (state: MagneticCursorState) => void;

let currentState: MagneticCursorState = {
  active: false,
  mode: 'default',
};

const listeners = new Set<Listener>();

export const magneticCursor = {
  get: () => currentState,

  set: (state: Partial<MagneticCursorState>) => {
    currentState = { ...currentState, ...state };
    listeners.forEach((listener) => listener(currentState));
  },

  hoverProject: (params: {
    title: string;
    category?: string;
    actionLabel?: string;
    targetPoint?: { x: number; y: number };
    magneticStrength?: number;
  }) => {
    magneticCursor.set({
      active: true,
      mode: 'project',
      title: params.title,
      category: params.category,
      actionLabel: params.actionLabel || 'INSPECT ↗',
      targetPoint: params.targetPoint,
      magneticStrength: params.magneticStrength ?? 0.32,
    });
  },

  setDrag: (isDragging: boolean) => {
    if (isDragging) {
      magneticCursor.set({
        active: true,
        mode: 'drag',
        actionLabel: 'DRAG ⇄',
      });
    } else {
      magneticCursor.reset();
    }
  },

  hoverButton: (targetPoint?: { x: number; y: number }) => {
    magneticCursor.set({
      active: true,
      mode: 'button',
      targetPoint,
      magneticStrength: 0.22,
    });
  },

  reset: () => {
    currentState = {
      active: false,
      mode: 'default',
      title: undefined,
      category: undefined,
      actionLabel: undefined,
      targetPoint: undefined,
      magneticStrength: undefined,
    };
    listeners.forEach((listener) => listener(currentState));
  },

  triggerHover: (
    centerX: number,
    centerY: number,
    _width?: number,
    _height?: number,
    actionLabel?: string,
    title?: string
  ) => {
    magneticCursor.hoverProject({
      title: title || '3D COMMISSIONS',
      actionLabel: actionLabel || 'INSPECT ↗',
      targetPoint: { x: centerX, y: centerY },
      magneticStrength: 0.28,
    });
  },

  clearHover: () => {
    magneticCursor.reset();
  },

  subscribe: (listener: Listener) => {
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  },
};
