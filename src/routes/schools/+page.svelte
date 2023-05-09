<script>
    import { onMount } from "svelte";
    import {browser} from '$app/environment'
    let schools= [], school = "ext"
    onMount(async ()=>{
        const schReq = await fetch("https://school-platform-api.onrender.com/schools")
        schools = await schReq.json()
    })
    $:schools
    $: school
    $: if(school != "ext"){
        
        if(browser){
            window.location.href=`/${school.schooldomain}/login`
            localStorage.setItem('school', JSON.stringify(school))
            console.log(school._id);
        }
    }
</script>
<div data-theme="corporate" class="flex flex-col items-center justify-center items-center justify-center h-screen w-screen overflow-x-hidden " style="background-image: url(/bg.jpg);">
    <div class="card bg-white shadow-xl shadow-gray-800 w-96">
        <div class="card-body w-full">
            <div class="card-title justify-center ">SEARCH SCHOOL</div>
            <select bind:value={school} class="select select-primary">
                <option disabled selected class="p-4" value="ext">SEARCH SCHOOL</option>
                {#each schools as school }
                    <option value={school}>{school.schoolName}</option>
                {/each}
            </select>
        </div>
    </div>
</div>