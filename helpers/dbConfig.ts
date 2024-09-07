import { Client, Account, ID } from 'react-native-appwrite'

export const dbConfig = {
  endpoint: 'https://cloud.appwrite.io/v1',
  platform: 'com.coder.aora',
  projectId: '66d2133f000cafbc65ea',
  databaseId: '66d21488001296fd0fae',
  videos: '66d214a40024e79c7daa',
  users: '66d21490000fa42d18c9',
  bucketId: '66d21752002c16497a69',
}

const client = new Client()

client.setEndpoint(dbConfig.endpoint).setProject(dbConfig.projectId).setPlatform(dbConfig.platform)

const account = new Account(client)

export const register = async (email: string, password: string, username: string) => {
  try {
    return await account.create(ID.unique(), email, password, username)
  } catch (error) {
    console.log('🚀 ~ register ~ error:', error)
    throw new Error('error in registering')
  }
}

export const login = async (email: string, password: string) => {
  try {
    return await account.createEmailPasswordSession(email, password)
  } catch (error) {
    console.log('🚀 ~ login ~ error:', error)
    throw new Error('error in log in')
  }
}

export const getLoginInfo = async () => {
  try {
    return await account.getSession('current')
  } catch (error) {
    console.log('🚀 ~ login ~ error:', error)
    throw new Error('error while getting session info')
  }
}
