<script>
    import {browser} from '$app/environment'
    import {api} from '../../../lib/helpers/api'
    import Input from '../../../lib/components/input.svelte';
    let school = {}, username="", password="", state="", error=undefined, success=undefined
    if(browser){
        school = JSON.parse(localStorage.getItem('school'))
    }

    async function login() {
        state = "loading"
        const response = await api(`account/login/${school._id.$oid}`, 'post', {username:username, password:password, role:'role'})
        console.log(response);
        if(response.status == 'ok'){
            // Save token and log in
            success = "Logged in..."
            error = undefined
            localStorage.setItem('token', response.token)
            window.location.href = `/${school.schoolName}/${response.role}`
        }

        if(response.status == 'error'){
            error=response.msg
        }

        state = ""
    }

</script>
<div>
    <div data-theme="corporate" class="flex flex-col items-center justify-center items-center justify-center h-screen w-screen overflow-x-hidden " style="background-image: url(/bg.jpg);">
        <div class="card bg-white shadow-xl shadow-gray-800 w-96">
            <div class="card-body w-full">
                <div class="card-title justify-center flex">SIGN IN</div>
                
                <div class=" items-center font-medium flex"><div class="flex-auto">{school["schoolName"]}</div><div class=" rounded-full h-10 w-10 bg-blue-700"></div></div>
                {#if success}
                    <div class="alert alert-success shadow-lg text-white">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span>{success}</span>
                        </div>
                    </div>
                {/if}
                {#if error}
                    <div class="alert alert-warning shadow-lg text-white">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                            <span>{error}</span>
                        </div>
                    </div>
                {/if}
                <Input ph="USERNAME" bind:value={username} />
                <Input ph="PASSWORD" bind:value={password} type="password"/>
                <div class="card-actions justify-center">
                    <button class="btn btn-sm  btn-primary {state}" on:click={login}>Sign In</button>
                </div>
            </div>
        </div>
    </div>
</div>