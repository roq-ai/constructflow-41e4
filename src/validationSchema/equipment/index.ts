import * as yup from 'yup';

export const equipmentValidationSchema = yup.object().shape({
  name: yup.string().required(),
  availability: yup.boolean().required(),
  project_id: yup.string().nullable().required(),
});
