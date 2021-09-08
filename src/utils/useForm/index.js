import {useState} from 'react';

const useForm = (initialValue) => {
  const [form, setForm] = useState(initialValue);

  return [
    form,
    (formType, FormValue) => {
      if (formType === 'reset') {
        return setForm(initialValue);
      }
      return setForm({...form, [formType]: [FormValue]});
    },
  ];
};

export default useForm;
