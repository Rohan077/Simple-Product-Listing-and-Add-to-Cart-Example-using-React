import { createSlice } from '@reduxjs/toolkit';

const initialState={
    login:JSON.parse(localStorage.getItem('user')),
    isLoggedIn:localStorage.getItem('login')
}

export const loginSlice=createSlice({
name:'login',
initialState,
reducers:{

    signUp:(state,action)=>{
        const user= action.payload
        localStorage.setItem('user', JSON.stringify(user))
        user&&alert('registration successfull!')

    },
    signIn:(state,action)=>{
        const user=JSON.parse(localStorage.getItem('user'))

        if(localStorage.getItem('user')){
            if(user.email===action.payload.email&&user.password===action.payload.password){
                localStorage.setItem('login',action.payload.email)
                alert('login successfull!!!')
            }else{
                alert('Incorrect credentials!')
            }
            
        }else{
            alert('user not found')
        }
    
    },

    logOut:(state)=>{
        localStorage.removeItem('login')
        alert('You are logged out!')
    }
},

})

export const {signIn,signUp,logOut,fetchUser}=loginSlice.actions;
export const getUser=(state)=>state.login.login
export const isUserLoggedIn=(state)=>state.login.isLoggedIn
export default loginSlice.reducer;
