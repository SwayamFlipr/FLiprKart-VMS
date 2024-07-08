import React, { memo, useState, useRef, ForwardedRef, forwardRef, useImperativeHandle, useCallback } from 'react';

interface IProps {
  onEventTrigger?: (value: string) => void;
  disabled?: boolean;
  alwaysFocus?: boolean;
  placeholder: string;
}

export interface IKeyKeyEventInputRef {
  focus: () => void;
}

const KeyEventInput = (props: IProps, ref: ForwardedRef<IKeyKeyEventInputRef>) => {
  const { onEventTrigger, disabled = false, alwaysFocus = false, placeholder } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState('');

  const focus = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  useImperativeHandle(
    ref,
    () => {
      return {
        focus
      };
    },
    [focus]
  );

  return (
    <input
      ref={inputRef}
      autoFocus={true}
      disabled={disabled}
      className="border text-black rounded-xl px-4 py-2 focus:border-blue-500"
      value={value}
      placeholder={placeholder}
      onChange={(e) => setValue(e.target.value)}
      onBlur={() => {
        alwaysFocus && setTimeout(() => inputRef.current?.focus(), 10000);
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          onEventTrigger && onEventTrigger(value);
          setValue('');
        }
      }}
    />
  );
};

export default memo(forwardRef(KeyEventInput));
