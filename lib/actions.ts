'use server'

export async function submitContactForm(formData: FormData) {
    const firstName = formData.get('first-name') as string
    const lastName = formData.get('last-name') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const subject = formData.get('subject') as string
    const message = formData.get('message') as string

    const web3FormData = new FormData()
    web3FormData.append('access_key', process.env.WEB3FORMS_ACCESS_KEY!)
    web3FormData.append('to', 'enockkalumba213@gmail.com')
    web3FormData.append('from', 'noreply@abf-funeral-services.com')
    web3FormData.append('subject', `Contact Form: ${subject}`)
    web3FormData.append('first-name', firstName)
    web3FormData.append('last-name', lastName)
    web3FormData.append('email', email)
    web3FormData.append('phone', phone)
    web3FormData.append('subject', subject)
    web3FormData.append('message', message)

    const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: web3FormData
    })

    const result = await response.json()

    if (!result.success) {
        throw new Error('Failed to send message')
    }

    // Form will clear automatically
}

export async function submitForm(formData: FormData) {
    const fullName = formData.get('full-name') as string
    const phone = formData.get('phone') as string
    const email = formData.get('email') as string
    const preferredPlan = formData.get('preferred-plan') as string
    const paymentMethod = formData.get('payment-method') as string
    const additionalInfo = formData.get('additional-info') as string

    const web3FormData = new FormData()
    web3FormData.append('access_key', process.env.WEB3FORMS_ACCESS_KEY!)
    web3FormData.append('to', 'enockkalumba213@gmail.com')
    web3FormData.append('from', 'noreply@abf-funeral-services.com')
    web3FormData.append('subject', 'New Ekijja Omanyi Application')
    web3FormData.append('full-name', fullName)
    web3FormData.append('phone', phone)
    web3FormData.append('email', email)
    web3FormData.append('preferred-plan', preferredPlan)
    web3FormData.append('payment-method', paymentMethod)
    web3FormData.append('additional-info', additionalInfo)

    const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: web3FormData
    })

    const result = await response.json();

    if (!result.success) {
        throw new Error('Failed to submit application')
    }

    // Form will clear automatically
}

export async function submitObituaryForm(formData: FormData) {
    const name = formData.get('name') as string
    const age = formData.get('age') as string
    const dateOfDeath = formData.get('date-of-death') as string
    const obituaryText = formData.get('obituary-text') as string
    const submitterName = formData.get('submitter-name') as string
    const submitterEmail = formData.get('submitter-email') as string

    const web3FormData = new FormData()
    web3FormData.append('access_key', process.env.WEB3FORMS_ACCESS_KEY!)
    web3FormData.append('to', 'enockkalumba213@gmail.com')
    web3FormData.append('from', 'noreply@abf-funeral-services.com')
    web3FormData.append('subject', 'New Obituary Submission')
    web3FormData.append('name', name)
    web3FormData.append('age', age)
    web3FormData.append('date-of-death', dateOfDeath)
    web3FormData.append('obituary-text', obituaryText)
    web3FormData.append('submitter-name', submitterName)
    web3FormData.append('submitter-email', submitterEmail)

    const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: web3FormData
    })

    const result = await response.json()

    if (!result.success) {
        throw new Error('Failed to submit obituary')
    }

    // Form will clear automatically
}