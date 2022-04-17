import { useContext } from 'react'
import { useRouter } from 'next/router'
import { Formik, Form, Field } from 'formik'
import {
  useLoginMutation,
  useUpdateUserMutation,
} from '../../../generated/graphql'

import { auth } from '../../../config/config'
import { CustomTextField } from '../../elements'
import { TokenContext } from '../../../providers'
import { ForgotPasswordText } from './SignIn.styled'
import * as Styled from '../../../styles/shared.styled'
import styles from './SignIn.module.css'

interface FormSubmitData {
  email: string
  password: string
}

type ErrorResponse = { code: string; error: string; field: string }

interface SignInProps {
  onStart?: () => void
  onSuccess?: () => void
}

export const SignIn: React.FC<SignInProps> = ({ onStart, onSuccess }) => {
  const [login] = useLoginMutation()
  const [updateUser] = useUpdateUserMutation()

  const { setTokenAttached } = useContext(TokenContext)

  const router = useRouter()

  const signInUser = async (
    data: FormSubmitData
  ): Promise<ErrorResponse | null> => {
    let errorResponse = null

    await auth
      .signInWithEmailAndPassword(data.email, data.password)
      .then(async (user) => {
        if (user.user?.uid) {
          const response = await login({ variables: { uid: user.user.uid } })

          if (response.data?.login.token) {
            localStorage.setItem('token', response.data.login.token)
            setTokenAttached(true)
          }
        }
      })
      .then(() => {
        updateUser({
          variables: {
            input: {
              last_logged_in: new Date(),
            },
          },
        })
      })
      .catch((err) => {
        console.log(err)
        errorResponse = {
          code: err.code,
          error: err.message,
          field: 'Sign In User',
        }
      })

    return errorResponse
  }

  return (
    <Formik
      validateOnChange={false}
      validateOnBlur={false}
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={async (data, { setSubmitting, setFieldError }) => {
        setSubmitting(true)

        if (onStart) onStart()

        const errorResponse: ErrorResponse | null = await signInUser(data)

        if (!errorResponse && onSuccess) onSuccess()

        if (errorResponse?.code === 'auth/user-not-found') {
          setFieldError('email', 'Invalid email')
        } else if (errorResponse?.code === 'auth/wrong-password') {
          setFieldError('password', 'Invalid password')
        } else if (errorResponse?.code === 'auth/too-many-requests') {
          setFieldError(
            'password',
            'Too many failed log in attempts, plase try again later.'
          )
        }

        setSubmitting(false)
      }}
      validate={(values) => {
        const errors: Record<string, string> = {}

        if (values.email.length === 0) errors.email = 'Please enter your email'
        if (values.password.length === 0)
          errors.password = 'Please enter your password'

        const re =
          /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        if (!re.test(values.email) && values.email.length !== 0)
          errors.email = 'Invalid email formatting'

        console.log(errors)
        return errors
      }}
    >
      {({ values, isSubmitting, handleSubmit }) => (
        <form className={styles.authwrapper} onSubmit={handleSubmit}>
          <div className={styles.headertext}>Favor</div>
          <div className={styles.loginText}>log in</div>
          <div className={styles.inputFormWrapper}>
            <div className={styles.inputheader}>email</div>
            <input
              name="email"
              required={true}
              autoFocus
              className={styles.inputbox}
            />
            <div className={styles.inputheader}>password</div>
            <input
              name="password"
              type="password"
              required={true}
              autoFocus
              className={styles.inputbox}
            />
            <div
              className={styles.forgotpassword}
              onClick={() => router.push('/forgot-password')}
            >
              Forgot your password?
            </div>
            <button className={styles.submitButton}>get favoring!</button>
          </div>
          <div className={styles.randomtext}>new to Favor?</div>
          <div>
            <button
              className={styles.submitButton}
              style={{ backgroundColor: '#2A9D8F', marginTop: '5px' }}
              onClick={() => router.push('/signup')}
            >
              sign up!
            </button>
          </div>
        </form>
      )}
    </Formik>
  )
}
