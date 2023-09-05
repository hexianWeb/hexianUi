import type { Ref, InjectionKey } from "vue";

export type NameType = string | number;

export interface CollapseProps {
  modelValue: NameType[];
  according?: boolean;
}

export interface CollapseItemProps {
  name: NameType;
  title?: string;
  disabled?: boolean;
}

export interface CollapseContext {
  activeNames: Ref<NameType[]>;
  handleItemClick: (name: NameType) => void;
}

export interface CollapseEmits {
  (event: "update:modelValue", values: NameType[]): void;
  (event: "change", values: NameType[]): void;
}
