import { Label, Input, Checkbox } from '@ui/ui-imports';

type InputWithLabelProps = {
    label?: any;
    value?: any;
    placeholder?: any;
    className?: any;
    type?: any;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

type CheckboxWithLabel = {
    label?: any;
    value?: any;
    checked?: any;
    defaultValue?: any;
    className?: any;
    type?: any
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function InputWithLabel({ label, type, className, value, placeholder, onChange }: InputWithLabelProps) {
    return (
        <div className="flex flex-col gap-2 `${className}`">
            <Label className="light:text-white text-cream">{label}</Label>
            <Input type={type} className="border-cream bg-transparent" value={value} placeholder={placeholder} onChange={onChange} />
        </div>
    );
}

const CheckboxWithLabel = ({ label, className, value, defaultValue, checked }: CheckboxWithLabel) => {
    return (
        <div className="flex flex-col gap-2 `${className}`">
            <Label>{label}</Label>
            <Checkbox value={value} checked={checked} defaultValue={defaultValue} />
        </div>
    );
};

export { InputWithLabel, CheckboxWithLabel };
