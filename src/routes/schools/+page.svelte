<script>
    import { onMount } from "svelte";
    let schools= []
    onMount(async ()=>{
        const schReq = await fetch("https://school-platform-api.onrender.com/schools")
        schools = await schReq.json()
    })
    $:schools
</script>
search school