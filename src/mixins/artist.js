export default {
    data() {
        return {
            id: "",
            queryType: "",
        };
    },
    methods: {
        url: function() {
            var str = window.location.search;
            var val = str.split("?").pop();
            this.id = str.split("=").pop();
            this.queryType = val.substring(0, val.indexOf("="));
        },
    },
    mounted() {
        this.url();
    },
    computed: {
        artist() {
            var artistobj;
            if (this.queryType == "TopArtistId") {
                this.$store.dispatch("fetchtopArtists");
                artistobj = this.$store.state.topArtists.find(
                    (obj) => obj.Id == this.id
                );
                return artistobj;
            }
        },
    },

}