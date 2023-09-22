'use client';
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import styles from './createbook.module.scss';

const CreateBook = () => {
  return (
    <div className={styles.createbook}>
      <Formik
        initialValues={{ bookName: '', description: '', email: '' }}
        validationSchema={Yup.object({
          bookName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
            description: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit} className={styles.creatBookForm}>
            <div className={styles.innerdivs}>
              <label htmlFor="bookName">Book Name</label>
              <input
                id="bookName"
                type="text"
                placeholder='Choose a perfect name...'
                {...formik.getFieldProps('bookName')}
              />
              {formik.touched.bookName && formik.errors.bookName ? (
                <div>{formik.errors.bookName}</div>
              ) : null}
            </div>

            <div className={styles.innerdivs}>
              <label htmlFor="description">Description</label>
              <input
                id="description"
                type="textarea"
                placeholder='Add some interesting description to it...'
                {...formik.getFieldProps('description')}
              />
              {formik.touched.description && formik.errors.description ? (
                <div>{formik.errors.description}</div>
              ) : null}
            </div>

            <div className={styles.innerdivs}>
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder='your e-mail'
                {...formik.getFieldProps('email')}
              />
              {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
              ) : null}
            </div>

            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
};
// import React from 'react';
// import { Formik, Field, Form, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import styles from './createbook.module.scss';

// const CreateBook = () => {
//   return (
//     <div className={styles.createbook}>
//       <Formik
//         initialValues={{ firstName: '', lastName: '', email: '' }}
//         validationSchema={Yup.object({
//           firstName: Yup.string()
//             .max(15, 'Must be 15 characters or less')
//             .required('Required'),
//           lastName: Yup.string()
//             .max(20, 'Must be 20 characters or less')
//             .required('Required'),
//           email: Yup.string()
//             .email('Invalid email address')
//             .required('Required'),
//         })}
//         onSubmit={(values, { setSubmitting }) => {
//           setTimeout(() => {
//             alert(JSON.stringify(values, null, 2));
//             setSubmitting(false);
//           }, 400);
//         }}
//       >
//         <Form className={styles.creatBookForm}>
//           <div>
//             <label htmlFor="ChooseAperfectNameForYourBook">Choose A Perfect Name For Your Book</label>
//             <Field name="ChooseAperfectNameForYourBook" type="text" />
//             <ErrorMessage name="ChooseAperfectNameForYourBook" />
//           </div>
//           <div>
//             <label htmlFor="description">Description</label>
//             <Field name="description" as="textarea" />
//             <ErrorMessage name="description" />
//           </div>
//           <div>
//             <label htmlFor="email">Email Address</label>
//             <Field name="email" type="email" />
//             <ErrorMessage name="email" />
//           </div>
//           <div>
//             <button type="submit">Submit</button>
//           </div>
//         </Form>
//       </Formik>
//     </div>
//   );
// };

export default CreateBook;
