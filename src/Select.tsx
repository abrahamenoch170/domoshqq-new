import React, { useState, useRef, useEffect, useId } from 'react';
import { ChevronDown, Check } from 'lucide-react';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps {
  id?: string;
  name?: string;
  value: string;
  onChange: (value: string) => void;
  options: (SelectOption | string)[];
  placeholder?: string;
  label?: string;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  className?: string;
}

export const Select: React.FC<SelectProps> = ({
  id,
  name,
  value,
  onChange,
  options,
  placeholder = 'Select an option',
  label,
  error,
  disabled = false,
  required = false,
  className = '',
}) => {
  const generatedId = useId();
  const selectId = id || `select-${generatedId}`;
  const listboxId = `listbox-${generatedId}`;
  const labelId = `label-${generatedId}`;

  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const listboxRef = useRef<HTMLUListElement>(null);

  // Normalize options to { value, label } format
  const normalizedOptions: SelectOption[] = options.map((opt) =>
    typeof opt === 'string' ? { value: opt, label: opt } : opt
  );

  const selectedOption = normalizedOptions.find((opt) => opt.value === value);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Scroll active option into view
  useEffect(() => {
    if (isOpen && activeIndex >= 0 && listboxRef.current) {
      const items = listboxRef.current.querySelectorAll<HTMLLIElement>('[role="option"]');
      if (items[activeIndex]) {
        items[activeIndex].scrollIntoView({ block: 'nearest' });
      }
    }
  }, [isOpen, activeIndex]);

  const handleSelect = (optValue: string) => {
    onChange(optValue);
    setIsOpen(false);
    triggerRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;

    switch (e.key) {
      case 'Enter':
      case ' ':
        e.preventDefault();
        if (isOpen) {
          if (activeIndex >= 0 && activeIndex < normalizedOptions.length) {
            handleSelect(normalizedOptions[activeIndex].value);
          } else {
            setIsOpen(false);
          }
        } else {
          setIsOpen(true);
          const currentIndex = normalizedOptions.findIndex((opt) => opt.value === value);
          setActiveIndex(currentIndex >= 0 ? currentIndex : 0);
        }
        break;

      case 'ArrowDown':
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
          const currentIndex = normalizedOptions.findIndex((opt) => opt.value === value);
          setActiveIndex(currentIndex >= 0 ? currentIndex : 0);
        } else {
          setActiveIndex((prev) => (prev < normalizedOptions.length - 1 ? prev + 1 : 0));
        }
        break;

      case 'ArrowUp':
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
          const currentIndex = normalizedOptions.findIndex((opt) => opt.value === value);
          setActiveIndex(currentIndex >= 0 ? currentIndex : normalizedOptions.length - 1);
        } else {
          setActiveIndex((prev) => (prev > 0 ? prev - 1 : normalizedOptions.length - 1));
        }
        break;

      case 'Escape':
        if (isOpen) {
          e.preventDefault();
          setIsOpen(false);
          triggerRef.current?.focus();
        }
        break;

      case 'Tab':
        if (isOpen) {
          setIsOpen(false);
        }
        break;

      default:
        break;
    }
  };

  return (
    <div ref={containerRef} className={`relative flex flex-col gap-2 w-full ${className}`}>
      {label && (
        <label
          id={labelId}
          htmlFor={selectId}
          className="text-[14px] font-bold text-[#1A1A1A] flex items-center justify-between"
        >
          <span>{label}</span>
          {required && <span className="text-[#F26522] text-[12px] font-mono">*</span>}
        </label>
      )}

      {/* Reusable accessible trigger button */}
      <div className="relative w-full">
        <button
          ref={triggerRef}
          id={selectId}
          type="button"
          role="combobox"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-controls={listboxId}
          aria-labelledby={label ? labelId : undefined}
          aria-invalid={Boolean(error)}
          aria-required={required}
          disabled={disabled}
          onClick={() => {
            if (!disabled) {
              setIsOpen((prev) => !prev);
              const currentIndex = normalizedOptions.findIndex((opt) => opt.value === value);
              setActiveIndex(currentIndex >= 0 ? currentIndex : 0);
            }
          }}
          onKeyDown={handleKeyDown}
          className={`w-full h-[52px] md:h-[50px] px-4 bg-[#F9F9F9] hover:bg-white text-left text-[16px] rounded-lg transition-all duration-200 flex items-center justify-between cursor-pointer border focus:outline-none ${
            error
              ? 'border-[#F26522] focus:ring-1 focus:ring-[#F26522]'
              : isOpen
              ? 'border-[#F26522] bg-white ring-1 ring-[#F26522]'
              : 'border-[#1A1A1A]/10 hover:border-[#1A1A1A]/25 focus:border-[#F26522] focus:ring-1 focus:ring-[#F26522]'
          } ${disabled ? 'opacity-50 cursor-not-allowed bg-gray-100' : ''}`}
        >
          <span className={`truncate ${selectedOption ? 'text-[#1A1A1A] font-medium' : 'text-[#1A1A1A]/40'}`}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <ChevronDown
            className={`w-4 h-4 text-[#1A1A1A]/50 transition-transform duration-200 shrink-0 ml-2 ${
              isOpen ? 'rotate-180 text-[#F26522]' : ''
            }`}
            strokeWidth={2}
          />
        </button>

        {/* Hidden select to ensure compatibility with standard form submissions */}
        <select
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          tabIndex={-1}
          aria-hidden="true"
          className="sr-only"
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {normalizedOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        {/* Dropdown Menu */}
        {isOpen && (
          <ul
            ref={listboxRef}
            id={listboxId}
            role="listbox"
            tabIndex={-1}
            aria-label={label || placeholder}
            className="absolute z-50 left-0 right-0 mt-1.5 max-h-60 overflow-y-auto bg-white border border-[#1A1A1A]/15 rounded-xl shadow-[0_16px_36px_rgba(0,0,0,0.1)] py-1.5 focus:outline-none animate-in fade-in-50 duration-150"
          >
            {normalizedOptions.map((opt, idx) => {
              const isSelected = opt.value === value;
              const isActive = idx === activeIndex;

              return (
                <li
                  key={opt.value}
                  role="option"
                  aria-selected={isSelected}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onClick={() => handleSelect(opt.value)}
                  className={`min-h-[46px] px-4 py-2.5 text-[15px] sm:text-[16px] flex items-center justify-between cursor-pointer transition-colors select-none ${
                    isSelected
                      ? 'bg-[#FFF5EB] text-[#F26522] font-semibold'
                      : isActive
                      ? 'bg-[#FFF5EB]/60 text-[#1A1A1A]'
                      : 'text-[#1A1A1A]/90 hover:bg-[#FFF5EB]/50'
                  }`}
                >
                  <span className="truncate pr-2">{opt.label}</span>
                  {isSelected && <Check className="w-4 h-4 text-[#F26522] shrink-0" strokeWidth={2.5} />}
                </li>
              );
            })}
          </ul>
        )}
      </div>

      {error && <span className="text-[13px] text-[#F26522] font-medium leading-none">{error}</span>}
    </div>
  );
};

export default Select;
