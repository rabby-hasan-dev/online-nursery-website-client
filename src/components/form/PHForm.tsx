import { ReactNode } from "react";
import { FieldValues, FormProvider, SubmitHandler, useForm } from "react-hook-form";

// type TDefaultValues = { userId: string; password: string; }

type TPropsForm = {
    onSubmit: SubmitHandler<FieldValues>;
    children: ReactNode;

} & TFormCofing

type TFormCofing = {
    defaultValues?: Record<string, any>
}



const PHForm = ({ onSubmit, children, defaultValues }: TPropsForm) => {

    const formConfig: TFormCofing = {};

    if (defaultValues) {
        formConfig['defaultValues'] = defaultValues;
    }
    const methods = useForm(formConfig)



    return (
        <FormProvider {...methods} >


            <form onSubmit={methods.handleSubmit(onSubmit)}> {children} </form>
        </FormProvider>
    );
};

export default PHForm;