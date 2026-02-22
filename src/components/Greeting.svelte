<script lang="ts">
    import { onMount } from 'svelte';

    const currentTime = new Date()
    const currentHour = currentTime.getHours()

    let greetingKey = ""

    if (currentHour < 12 && currentHour > 5) {
        greetingKey = "greeting.morning"
    } else if (currentHour >= 12 && currentHour < 20 ) {
        greetingKey = "greeting.afternoon"
    } else {
        greetingKey = "greeting.evening"
    }

    // Default values if translation hasn't run yet
    const defaults = {
        "greeting.morning": "Buenos días",
        "greeting.afternoon": "Buenas tardes",
        "greeting.evening": "Buenas noches"
    }
</script>

<h1 class="text-3xl font-bold dark:text-text-bright text-slate-900" data-i18n={greetingKey}>
    {defaults[greetingKey]}
</h1>