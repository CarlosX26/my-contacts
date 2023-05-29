import { useToast } from "@chakra-ui/react"
import { AxiosError } from "axios"
import React, { createContext, useContext, useEffect, useState } from "react"
import { FieldValues, UseFormReset } from "react-hook-form"
import { useNavigate } from "react-router-dom"

import { ILoginForm } from "../validations/types"
import { IRegisterUserForm } from "../validations/types"
import { IUpdateUserForm } from "../validations/types"
import api from "../services/api/api"

interface IUser {
  fullName: string
  email: string
  phoneNumber: string
  createdAt: string
  id: string
}

interface IAuthContext {
  login(loginData: ILoginForm): void
  signUp(registerData: IRegisterUserForm): void
  toggleCard(card: string): void
  logout(): void
  updateUser(
    userData: IUpdateUserForm,
    reset: UseFormReset<FieldValues>
  ): Promise<void>
  card: string
  user: IUser | undefined
}

interface IAuthContextProviderProps {
  children: React.ReactNode
}

const authContext = createContext({} as IAuthContext)

const AuthContextProvider = ({ children }: IAuthContextProviderProps) => {
  const [user, setUser] = useState<IUser>()
  const [card, setCard] = useState("presentation")
  const navigate = useNavigate()
  const toast = useToast()

  useEffect(() => {
    const token = localStorage.getItem("@myContact:token")
    ;(async () => {
      await getUser(token!)
    })()
  }, [])

  const toggleCard = (card: string): void => {
    setCard(card)
  }

  const getUser = async (token: string): Promise<void> => {
    try {
      const { data } = await api.get("/clients/profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
      setUser(data)
      navigate("/dashboard", { replace: true })
    } catch (error) {
      console.log(error)
    }
  }

  const login = async (loginData: ILoginForm): Promise<void> => {
    try {
      const { data } = await api.post("/auth", loginData)
      localStorage.setItem("@myContact:token", data.token)
      navigate("/dashboard", { replace: true })
      await getUser(data.token)
    } catch (error) {
      toast({
        title: "Email ou senha inválidos.",
        status: "error",
        duration: 3000,
        position: "top-right",
      })
    }
  }

  const updateUser = async (
    userData: IUpdateUserForm,
    reset: UseFormReset<FieldValues>
  ): Promise<void> => {
    try {
      const token = localStorage.getItem("@myContact:token")
      const { data } = await api.patch("/clients/profile", userData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      reset()
      setUser(data)
    } catch (e) {
      console.log(e)
    }
  }

  const logout = () => {
    localStorage.clear()
    navigate("/")
  }

  const signUp = async (registerData: IRegisterUserForm): Promise<void> => {
    try {
      await api.post("/clients", registerData)
      toggleCard("login")
      toast({
        title: "Cadastro realizado.",
        status: "success",
        duration: 3000,
        position: "top-right",
      })
    } catch (e) {
      const error = e as AxiosError
      if (error.response?.status === 409) {
        toast({
          title: "Email ou telefone já cadastrado.",
          status: "error",
          duration: 3000,
          position: "top-right",
        })
      } else {
        toast({
          title: "Ops, ocorreu um erro.",
          status: "error",
          duration: 3000,
          position: "top-right",
        })
      }
    }
  }

  return (
    <authContext.Provider
      value={{
        login,
        signUp,
        updateUser,
        toggleCard,
        logout,
        card,
        user,
      }}
    >
      {children}
    </authContext.Provider>
  )
}

const useAuthContext = (): IAuthContext => useContext(authContext)

export { AuthContextProvider, useAuthContext }
