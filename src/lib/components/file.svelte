<script>
    export let files, ph
</script>
<label for=""  class="label">
    <span class="label-text">{ph}</span>
</label>
<input files={files} type="file" class="file-input file-input-bordered file-input-primary w-full max-w-xs"  on:input={e => files = e.target.files} placeholder={ph} />
