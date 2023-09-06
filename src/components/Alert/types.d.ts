export type AlertType = "primary" | "success" | "warning" | "danger" | "info";

export interface AlertProps {
  content?: string;
  type?: AlertType;
  effect?: "light" | "dark";
  closable?: boolean;
  icon?: string;
  center?: boolean;
}

export interface AlertEvent {
  (event: MouseEvent): void;
}

export interface AlertInstance {
  ref: HTMLDivElement;
  close: () => void;
}
