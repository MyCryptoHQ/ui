interface Clipboard extends EventTarget {
  read(): Promise<DataTransfer>;
  readText(): Promise<string>;
  write(dataTransfer: DataTransfer): Promise<void>;
  writeText(newClipText: string): Promise<void>;
}

interface Navigator {
  clipboard: Clipboard;
}
