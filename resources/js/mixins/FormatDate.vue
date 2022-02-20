<script>
export default {
    methods: {
        FormatDate(dateString) {
            const date = new Date(dateString);
            // Then specify how you want your dates to be formatted
            return new Intl.DateTimeFormat('default', {dateStyle: 'long'}).format(date);
        },

        FormatTime(dateString) {
            const date = new Date(dateString);
            // Then specify how you want your dates to be formatted
            return new Intl.DateTimeFormat('default', {timeStyle: 'short'}).format(date);
        }

    }
}
</script>
