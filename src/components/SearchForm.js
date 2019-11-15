import React, { useState } from "react";

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

export default function SearchForm({filter, data}) {
 
  return (
    <section className="search-form">
     <Formik
     initialValues={{
       search: ''
     }}
     onSubmit={(values, tools) => {
       console.log(values, tools);
       filter(data.filter(character => character.name.toLowerCase().includes(values.search)));
       if(values.search === '') {
         filter(data);
       }
       tools.resetForm();
     }}
     >
       {({isSubmitting}) => 
        <Form>
          <Field type='text' name='search' placeholder='search by character name'/>
          <button type='submit' disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </Form>
       }
     </Formik>
    </section>
  );
}
