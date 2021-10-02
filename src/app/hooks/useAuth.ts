import { useCallback } from 'react'
import { useAppDispatch, useAppSelector } from '.'





type IUseAuthResult = {
  isAuthorized: boolean,
  authorize: () => void,
  isRegistration: boolean
  // refresh: () => void,
}

export const useAuth = (): IUseAuthResult => {
  const dispatch = useAppDispatch()

  const isAuthorized = useAppSelector(state => state.auth.isAuthorized)
  const isAuthorizing = useAppSelector(state => state.auth.isAuthorized)
  const isRegistration = useAppSelector(state => state.registration.registraionProps)

  const handleAuthorize = useCallback(() => {
    // dispatch(authorize())
    // автоматическая авторизация
  }, [dispatch])

  return {
    isAuthorized,
    authorize: handleAuthorize,
    isRegistration: !isRegistration ? false : true
    // refresh,
  }
}
