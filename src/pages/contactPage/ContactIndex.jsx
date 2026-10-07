import React from 'react'
import ContactForm from '../../components/pages/contact/ContactForm'
import ContactMap from '../../components/pages/contact/ContactMap'
import Container from '../../components/common/Container'

const ContactIndex = () => {
  return (
    <section>
      <Container>
        <div className='flex flex-col gap-35 mb-35'>
          <ContactForm />
          <ContactMap />
        </div>
      </Container>
    </section>
  )
}

export default ContactIndex