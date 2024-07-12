import { Input } from "antd";
import { Controller } from "react-hook-form";

type TInputProps = {
    name: string;
    type: string;
    label: string;
}


const PHInput = ({ name, type, label }: TInputProps) => {

    return (
        <div style={{ marginBottom: '20px' }}>
            {label ? label : null}

            <Controller
                name={name}
                render={({ field }) => <Input className="border" {...field} type={type} id={name} />}


            />
            {/* <Input className="border" type={type} id={name}  {...register(name)} /> */}

        </div>
    )

};

export default PHInput;