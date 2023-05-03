<script>
    export let value, ph, type
</script>

<label for=""  class="label">
<span class="label-text">{ph}</span>
</label>
<input files={value} on:input={e => value = e.target.value} type={type} placeholder={ph} class="input input-bordered input-primary w-full max-w-xs" />