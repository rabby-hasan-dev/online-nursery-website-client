

import { Form, Select } from 'antd';
import { Controller, } from 'react-hook-form';

type TPHSelectProps = {
  label: string;
  name: string;
  options: { value: string; label: string; disabled?: boolean }[] | undefined;
  disabled?: boolean;
  mode?: 'multiple' | undefined;

};

const PHSelect = ({ label, name, options, disabled, mode }: TPHSelectProps) => {

  return (
    <Controller
      name={name}

      rules={{ required: ` ${name} is required`, }}
      render={({ field, fieldState: { error } }) => (
        <Form.Item
          label={label}
        >
          <Select
            mode={mode}
            style={{ width: '100%' }}
            {...field}
            options={options}
            size="middle"
            disabled={disabled}
          />
          {error && <small style={{ color: 'red' }}>{error.message}</small>}
        </Form.Item>
      )}
    />
  );
};

export default PHSelect;