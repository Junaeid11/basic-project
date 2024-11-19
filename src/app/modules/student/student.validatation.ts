import Joi from "joi";

const userNameSchema = Joi.object({
    firstName: Joi.string()
      .trim()
      .regex(/^[A-Z][a-z]*$/)
      .required()
      .messages({
        'string.empty': 'First name is required.',
        'string.pattern.base': 'First name must start with an uppercase letter and contain only alphabets.',
      }),
    middleName: Joi.string()
      .required()
      .messages({
        'string.empty': 'Middle name is required.',
      }),
    lastName: Joi.string()
      .regex(/^[a-zA-Z]+$/)
      .required()
      .messages({
        'string.empty': 'Last name is required.',
        'string.pattern.base': 'Last name should only contain alphabets.',
      }),
  });
  
  // Joi Schema for Guardian
  const guardianSchema = Joi.object({
    fatherName: Joi.string().required().messages({
      'string.empty': "Father's name is required.",
    }),
    fatherOccupation: Joi.string().required().messages({
      'string.empty': "Father's occupation is required.",
    }),
    fatherContactNumber: Joi.string().required().messages({
      'string.empty': "Father's contact number is required.",
    }),
    motherName: Joi.string().required().messages({
      'string.empty': "Mother's name is required.",
    }),
    motherOccupation: Joi.string().required().messages({
      'string.empty': "Mother's occupation is required.",
    }),
    motherContactNumber: Joi.string().required().messages({
      'string.empty': "Mother's contact number is required.",
    }),
  });
  
  // Joi Schema for Local Guardian
  const localGuardianSchema = Joi.object({
    name: Joi.string().required().messages({
      'string.empty': "Local guardian's name is required.",
    }),
    occupation: Joi.string().required().messages({
      'string.empty': "Local guardian's occupation is required.",
    }),
    contactNumber: Joi.string().required().messages({
      'string.empty': "Local guardian's contact number is required.",
    }),
    address: Joi.string().required().messages({
      'string.empty': "Local guardian's address is required.",
    }),
    profileImage: Joi.string().uri().messages({
      'string.uri': 'Profile image URL is invalid.',
    }),
    isActivate: Joi.string()
      .valid('Yes', 'blocked')
      .required()
      .messages({
        'any.required': 'Local guardian activation status is required.',
        'any.only': 'Activation status must be "Yes" or "blocked".',
      }),
  });
  
  // Joi Schema for Student
  const studentValidationSchema = Joi.object({
    id: Joi.string().required().messages({
      'string.empty': 'Student ID is required.',
    }),
    name: userNameSchema.required().messages({
      'any.required': 'Name is required.',
    }),
    gender: Joi.string()
      .valid('Male', 'Female')
      .required()
      .messages({
        'any.required': 'Gender is required.',
        'any.only': 'Gender must be either "Male" or "Female".',
      }),
    age: Joi.number().integer().min(0).required().messages({
      'number.base': 'Age must be a number.',
      'any.required': 'Age is required.',
      'number.min': 'Age must be greater than or equal to 0.',
    }),
    dateOfBirth: Joi.date().iso().required().messages({
      'any.required': 'Date of birth is required.',
      'date.format': 'Date of birth must be in ISO 8601 format.',
    }),
    email: Joi.string().email().required().messages({
      'string.email': 'Vhai tmr email Vul thik koro',
      'string.empty': 'Email is required.',
    }),
    contactNumber: Joi.string().required().messages({
      'string.empty': 'Contact number is required.',
    }),
    emergencyContactNumber: Joi.string().optional(),
    bloodGroup: Joi.string()
      .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
      .messages({
        'any.only': 'Invalid blood group.',
      }),
    presentAddress: Joi.string().required().messages({
      'string.empty': 'Present address is required.',
    }),
    permanentAddress: Joi.string().required().messages({
      'string.empty': 'Permanent address is required.',
    }),
    guardian: guardianSchema.required().messages({
      'any.required': 'Guardian information is required.',
    }),
    localGuardian: localGuardianSchema.optional(),
  });
 
export default studentValidationSchema;
