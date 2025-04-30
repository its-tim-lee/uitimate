import { useState, useRef, useLayoutEffect, useEffect } from "react"
import { Cta } from "../ui/Cta/Cta"
import { Input } from "../ui/Input/Input"
import { Icon } from "../ui/Icon/Icon"
import { useMaskito } from '@maskito/react';

interface PathAdjusterProps {
  adjustablePath: string;
  onChange?: (path: string) => void;
}

export default function PathAdjuster({ adjustablePath = '', onChange, ...props }: PathAdjusterProps) {
  const [path, setPath] = useState(adjustablePath);
  const [isEditing, setIsEditing] = useState(false);
  const [inputHeight, setInputHeight] = useState<number | undefined>(undefined);
  const [inputWidth, setInputWidth] = useState<number | undefined>(undefined);
  const widthRef = useRef<HTMLSpanElement>(null);
  const editingPathRef = useRef(path);

  // Mask: allow a-z, A-Z, 0-9, /, -, _ (up to 50 chars)
  const pathMask = {
    mask: Array(50).fill(/[a-zA-Z0-9/_-]/)
  };
  const pathRef = useMaskito({ options: pathMask });

  const handleEditClick = () => {
    if (widthRef.current) {
      setInputHeight(widthRef.current.offsetHeight);
      setInputWidth(widthRef.current.offsetWidth + 16); // +16 for caret and padding
    }
    editingPathRef.current = path;
    setIsEditing(true);
  };

  const handleConfirm = () => {
    const newPath = editingPathRef.current || adjustablePath;
    setPath(newPath);
    setIsEditing(false);
    onChange?.(newPath);
  };

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    const newPath = e.currentTarget.value;
    editingPathRef.current = newPath;
    setPath(newPath);
  };

  useEffect(() => {
    setPath(adjustablePath);
    editingPathRef.current = adjustablePath;
  }, [adjustablePath]);

  useLayoutEffect(() => {
    if (widthRef.current) {
      setInputWidth(widthRef.current.offsetWidth + 16);
    }
  }, [path, isEditing]);

  return (
    <div className="tw:flex tw:gap-1 tw:items-center">
      {/* Hidden span for width/height measurement only */}
      <span
        ref={widthRef}
        style={{
          position: 'absolute',
          visibility: 'hidden',
          height: 0,
          overflow: 'hidden',
          whiteSpace: 'pre',
          font: 'inherit',
          padding: 0,
          margin: 0,
          letterSpacing: 'inherit',
        }}
      >
        {path || adjustablePath}
      </span>
      {!isEditing ? (
        <>
          <Cta muted shapes={['badge']} variant='secondary' size='lg'>
            {`import ... from "#/${path || adjustablePath}/..."`}
          </Cta>
          <Cta shapes={['badge', 'icon']} size='lg' onClick={handleEditClick}>
            <Icon icon="lucide:edit-3" />
          </Cta>
        </>
      ) : (
        <>
          <Cta muted shapes={['badge']} variant='secondary' size='lg'>
            {`import ... from "#/`}
          </Cta>
          <Input
            ref={pathRef}
            value={path}
            autoFocus
            onInput={handleInput}
            onBlur={handleConfirm}
            placeholder={adjustablePath}
            style={{
              minWidth: 40,
              width: inputWidth ? `${inputWidth + 16}px` : undefined,
              height: inputHeight ? `${inputHeight}px` : undefined
            }}
            {...props}
          />
          <Cta muted shapes={['badge']} variant='secondary' size='lg'>
            {`/..."`}
          </Cta>
          <Cta shapes={['badge', 'icon']} size='lg' onClick={handleConfirm} variant='primary'>
            <Icon icon="lucide:check" />
          </Cta>
        </>
      )}
    </div>
  );
}