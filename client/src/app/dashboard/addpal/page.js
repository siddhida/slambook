'use client';
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import styles from './addpal.module.scss';

const AddPal = () => {
  return (
    <div className={styles.createbook}>
      <Formik
        initialValues={{
          name: '',
          nick_name: '',
          phone_number: '',
          dob: '',
          likes: '',
          dislikes: '',
          email_id: '',
          current_crush: '',
          current_employment_status: '',
          current_relationship_status: '',
          current_education_status: '',
          one_word_about_me: '',
          one_paragraph_about_me: '',
          one_complaint_about_me: '',
          access_to_read_pal_granted: '',
          access_to_write_pal_granted: '',
          access_to_write_pal_granted_to: '',
          access_to_read_pal_granted_to: '',
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          nick_name: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          phone_number: Yup.number()
            .min(10, 'Must be more than 10 characters')
            .required('This field is requried'),
          dob: Yup.date(),
          likes: Yup.string().max(150, 'Must be 150 character or less'),
          dislikes: Yup.string().max(150, 'Must be 150 character or less'),
          email_id: Yup.string().email('Invalid email address'),
          current_crush: Yup.string().max(15, 'Must be 15 character or less'),
          current_employment_status: Yup.string().max(
            15,
            'Must be 15 character or less',
          ),
          current_relationship_status: Yup.string().max(
            15,
            'Must be 15 character or less',
          ),
          current_education_status: Yup.string().max(
            15,
            'Must be 15 character or less',
          ),
          one_word_about_me: Yup.string().max(
            15,
            'Must be 15 character or less',
          ),
          one_paragraph_about_me: Yup.string().max(
            150,
            'Must be 150 character or less',
          ),
          one_complaint_about_me: Yup.string().max(
            50,
            'Must be 50 character or less',
          ),
          access_to_read_pal_granted: Yup.boolean(),
          access_to_write_pal_granted: Yup.boolean(),
          access_to_write_pal_granted_to: Yup.string().email('Invalid email address'),
          access_to_read_pal_granted_to: Yup.string().email('Invalid email address'),
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
              <label htmlFor="name">Your Name</label>
              <input
                id="name"
                type="text"
                placeholder="Choose a perfect name..."
                {...formik.getFieldProps('name')}
              />
              {formik.touched.name && formik.errors.name ? (
                <div>{formik.errors.name}</div>
              ) : null}
            </div>
            <div className={styles.innerdivs}>
              <label htmlFor="nick_name">Nick Name</label>
              <input
                id="nick_name"
                type="text"
                placeholder="Share your pet name..."
                {...formik.getFieldProps('nick_name')}
              />
              {formik.touched.nick_name && formik.errors.nick_name ? (
                <div>{formik.errors.nick_name}</div>
              ) : null}
            </div>
            <div className={styles.innerdivs}>
              <label htmlFor="dob">Your D.O.B</label>
              <input
                id="dob"
                type="date"
                placeholder="Choose your DOB..."
                {...formik.getFieldProps('dob')}
              />
              {formik.touched.dob && formik.errors.dob ? (
                <div>{formik.errors.dob}</div>
              ) : null}
            </div>
            <div className={styles.innerdivs}>
              <label htmlFor="phone_number">Contact Number</label>
              <input
                id="phone_number"
                type="tel"
                placeholder="00000000"
                {...formik.getFieldProps('phone_number')}
              />
              {formik.touched.phone_number && formik.errors.phone_number ? (
                <div>{formik.errors.phone_number}</div>
              ) : null}
            </div>
            <div className={styles.innerdivs}>
              <label htmlFor="likes">Your Likes</label>
              <input
                id="likes"
                type="text"
                placeholder="What do you like..."
                {...formik.getFieldProps('likes')}
              />
              {formik.touched.likes && formik.errors.likes ? (
                <div>{formik.errors.likes}</div>
              ) : null}
            </div>
            <div className={styles.innerdivs}>
              <label htmlFor="dislikes">Your Dislikes</label>
              <input
                id="dislikes"
                type="text"
                placeholder="What do you dislike..."
                {...formik.getFieldProps('dislikes')}
              />
              {formik.touched.dislikes && formik.errors.dislikes ? (
                <div>{formik.errors.dislikes}</div>
              ) : null}
            </div>
            <div className={styles.innerdivs}>
              <label htmlFor="email_id">Email Address</label>
              <input
                id="email_id"
                type="email"
                placeholder='e-mail'
                {...formik.getFieldProps('email_id')}
              />
              {formik.touched.email_id && formik.errors.email_id ? (
                <div>{formik.errors.email_id}</div>
              ) : null}
            </div>
            <div className={styles.innerdivs}>
              <label htmlFor="current_crush">Your current crush</label>
              <input
                id="current_crush"
                type="text"
                placeholder="current crush..."
                {...formik.getFieldProps('current_crush')}
              />
              {formik.touched.current_crush && formik.errors.current_crush ? (
                <div>{formik.errors.current_crush}</div>
              ) : null}
            </div>
            <div className={styles.innerdivs}>
              <label htmlFor="current_employment_status">Employment status</label>
              <input
                id="current_employment_status"
                type="text"
                placeholder="current employment status..."
                {...formik.getFieldProps('current_employment_status')}
              />
              {formik.touched.current_employment_status && formik.errors.current_employment_status ? (
                <div>{formik.errors.current_employment_status}</div>
              ) : null}
            </div>
            <div className={styles.innerdivs}>
              <label htmlFor="current_relationship_status">Relationship status</label>
              <input
                id="current_relationship_status"
                type="text"
                placeholder="current relationship status..."
                {...formik.getFieldProps('current_relationship_status')}
              />
              {formik.touched.current_relationship_status && formik.errors.current_relationship_status ? (
                <div>{formik.errors.current_relationship_status}</div>
              ) : null}
            </div>
            <div className={styles.innerdivs}>
              <label htmlFor="current_education_status">Education status</label>
              <input
                id="current_education_status"
                type="text"
                placeholder="current education status..."
                {...formik.getFieldProps('current_education_status')}
              />
              {formik.touched.current_education_status && formik.errors.current_education_status ? (
                <div>{formik.errors.current_education_status}</div>
              ) : null}
            </div>
            <div className={styles.innerdivs}>
              <label htmlFor="one_word_about_me">one word about me</label>
              <input
                id="one_word_about_me"
                type="text"
                placeholder="one word about me..."
                {...formik.getFieldProps('one_word_about_me')}
              />
              {formik.touched.one_word_about_me && formik.errors.one_word_about_me ? (
                <div>{formik.errors.one_word_about_me}</div>
              ) : null}
            </div>
            <div className={styles.innerdivs}>
              <label htmlFor="one_paragraph_about_me">Description about me</label>
              <input
                id="one_paragraph_about_me"
                type="text"
                placeholder="Description about me..."
                {...formik.getFieldProps('one_paragraph_about_me')}
              />
              {formik.touched.one_paragraph_about_me && formik.errors.one_paragraph_about_me ? (
                <div>{formik.errors.one_paragraph_about_me}</div>
              ) : null}
            </div>
            <div className={styles.innerdivs}>
              <label htmlFor="one_complaint_about_me">one complaint about me</label>
              <input
                id="one_complaint_about_me"
                type="text"
                placeholder="one complaint about me..."
                {...formik.getFieldProps('one_complaint_about_me')}
              />
              {formik.touched.one_complaint_about_me && formik.errors.one_complaint_about_me ? (
                <div>{formik.errors.one_complaint_about_me}</div>
              ) : null}
            </div>
            <div className={styles.innerdivs}>
              <label htmlFor="access_to_read_pal_granted">Access to read</label>
              <input
                id="access_to_read_pal_granted"
                type="checkbox"
                {...formik.getFieldProps('access_to_read_pal_granted')}
              />
              {formik.touched.access_to_read_pal_granted && formik.errors.access_to_read_pal_granted ? (
                <div>{formik.errors.access_to_read_pal_granted}</div>
              ) : null}
            </div>
            <div className={styles.innerdivs}>
              <label htmlFor="access_to_write_pal_granted">Access to write</label>
              <input
                id="access_to_write_pal_granted"
                type="checkbox"
                {...formik.getFieldProps('access_to_write_pal_granted')}
              />
              {formik.touched.access_to_write_pal_granted && formik.errors.access_to_write_pal_granted ? (
                <div>{formik.errors.access_to_write_pal_granted}</div>
              ) : null}
            </div>

            <div className={styles.innerdivs}>
              <label htmlFor="access_to_write_pal_granted_to">Provide access to Read</label>
              <input
                id="access_to_write_pal_granted_to"
                type="email"
                {...formik.getFieldProps('access_to_write_pal_granted_to')}
              />
              {formik.touched.access_to_write_pal_granted_to && formik.errors.access_to_write_pal_granted_to ? (
                <div>{formik.errors.access_to_write_pal_granted_to}</div>
              ) : null}
            </div>
            <div className={styles.innerdivs}>
              <label htmlFor="access_to_read_pal_granted_to">Provide access to Write</label>
              <input
                id="access_to_read_pal_granted_to"
                type="email"
                {...formik.getFieldProps('access_to_read_pal_granted_to')}
              />
              {formik.touched.access_to_read_pal_granted_to && formik.errors.access_to_read_pal_granted_to ? (
                <div>{formik.errors.access_to_read_pal_granted_to}</div>
              ) : null}
            </div>

            {/* : '',
          : '',
          : '',
          one_word_about_me: '',
          : '',
          : '',
          access_to_read_pal_granted: '',
          access_to_write_pal_granted: '',
          access_to_write_pal_granted_to: '',
          : '', */}

            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
};
export default AddPal;
