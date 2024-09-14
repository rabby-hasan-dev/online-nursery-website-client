import { Form, Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

type TInputProps = {
    name: string;
    type: string;
    label: string;
    disabled?: boolean;
}


const PHInput = ({ name, type, label, disabled }: TInputProps) => {
    const { control, formState: { errors }, } = useFormContext();
    const errorMessage: string | undefined = errors[name]?.message as string | undefined;
    return (
        <div style={{ marginBottom: '20px' }}>
            {/* {label ? label : null} */}

            <Controller
                name={name}
                control={control}
                rules={{ required: ` ${name} is required`, }}
                render={({ field }) =>
                    <Form.Item
                        label={label}
                        validateStatus={errorMessage ? "error" : ""}
                        help={errorMessage}

                    >
                        <Input className="border" {...field} type={type} disabled={disabled} id={name} />

                    </Form.Item>
                }


            />


        </div>
    )

};

export default PHInput;