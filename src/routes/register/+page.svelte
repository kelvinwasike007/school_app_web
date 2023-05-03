<script>
    import File from "../../lib/components/file.svelte";
    import Input from "../../lib/components/input.svelte";
    import { api } from "../../lib/stores/app";
    
    let name ="", email = "", location = "",  domain="", phone="",error
    let logo 
    let loading = false
    async function handleRegister() {
        loading = true
        const payload = {
            name:name,
            email:email,
            logo: logo != undefined ? logo[0].name : "default.png",
            location:location,
            domain:domain == "" ? name : domain,
            phone: phone,
        }

        const submitSchool = await fetch($api+'/schools/new', {body:JSON.stringify(payload), method:'POST', headers:{'Content-Type': 'application/json'}})
        const response = await submitSchool.json()
        console.log(response)
        if ('error' in response){
            error = 'An Error Occured While Saving School, Please Check Your School Details And Try  Again'
            setTimeout(() => {
                error = undefined
            }, 10000);
        }
        loading=false
    }
    $: error
    $: loading
</script>
<div data-theme="corporate" class="flex flex-col items-center justify-center items-center justify-center h-screen w-screen overflow-x-hidden " style="background-image: url(/bg.jpg);">
    <div class="card w-3/4 sm:w-96 bg-gray-100 shadow-xl shadow-gray-500">
        <div class="card-body w-full">
            <div class="card-title text-center">REGISTER SCHOOL</div>
            <div>
            <Input bind:value={name} type="text" ph="Enter School Name" />
            <Input bind:value={email}  type="text" ph="Enter School email" />
            <Input bind:value={location} type="text"  ph="Enter School location" />
            <Input bind:value={domain} type="text"  ph="Enter School domain eg. test-school" />
            <Input bind:value={phone} type="text"  ph="Enter School phone" />
            <File bind:files={logo} type="file" ph="Upload School logo" />
            {#if error}
            <div class="alert alert-warning shadow-lg">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                  <span>Warning: {error}</span>
                </div>
              </div>
            {/if}
            </div>
            <div class="card-actions justify-center flex">
                <button class="{loading ? 'loading ' : ''} btn btn-primary btn-sm flex-auto" on:click={handleRegister}>Save School Info</button><a href="/" class="w-1/3 btn btn-sm btn-warning text-white">Cancel</a>
            </div>
        </div>
    </div>
</div>