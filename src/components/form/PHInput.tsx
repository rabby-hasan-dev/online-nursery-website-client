import { Input } from "antd";
import { Controller } from "react-hook-form";

type TInputProps = {
    name: string;
    type: string;
    label: string;
    disabled?:boolean;
}


const PHInput = ({ name, type, label ,disabled }: TInputProps) => {

    return (
        <div style={{ marginBottom: '20px' }}>
            {label ? label : null}

            <Controller
                name={name}
                render={({ field }) => <Input className="border" {...field} type={type} disabled={disabled} id={name} />}


            />
          

        </div>
    )

};

export default PHInput;