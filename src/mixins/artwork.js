export default {
    data() {
        return {
            getpictureID: "",
            getartworktype: "",
        };
    },

    methods: {
        url: function() {
            var str = window.location.search;
            var val = str.split("?").pop();
            this.getpictureID = str.split("=").pop();
            this.getartworktype = val.substring(0, val.indexOf("="));
        },
    },
    mounted() {
        this.url();
    },
    computed: {
        artwork() {
            var jsonResult;
            if (this.getartworktype == "featureArtworkId") {
                this.$store.dispatch("fetchFeatureds");
                jsonResult = this.$store.state.featureds.find(
                    (obj) => obj.Id == this.getpictureID
                );
            } else if (this.getartworktype == "highestPaidId") {
                this.$store.dispatch("fetchHighestPaids");
                jsonResult = this.$store.state.highestpaids.find(
                    (obj) => obj.Id == this.getpictureID
                );
            } else if (this.getartworktype == "topArtistsId") {
                this.$store.dispatch("fetchTopArtists");
                jsonResult = this.$store.state.topartists.find(
                    (obj) => obj.Id == this.getpictureID
                );
            } else if (this.getartworktype == "digitalArtworkId") {
                this.$store.dispatch("fetchDigitals");
                jsonResult = this.$store.state.digitals.find(
                    (obj) => obj.Id == this.getpictureID
                );
            } else if (this.getartworktype == "craftArtworkId") {
                this.$store.dispatch("fetchCrafts");
                jsonResult = this.$store.state.crafts.find(
                    (obj) => obj.Id == this.getpictureID
                );
            } else if (this.getartworktype == "photographyArtworkId") {
                this.$store.dispatch("fetchPhotographys");
                jsonResult = this.$store.state.photographys.find(
                    (obj) => obj.Id == this.getpictureID
                );
            } else if (this.getartworktype == "sculptureArtworkId") {
                this.$store.dispatch("fetchSculptures");
                jsonResult = this.$store.state.sculptures.find(
                    (obj) => obj.Id == this.getpictureID
                );
            } else if (this.getartworktype == "drawingArtworkId") {
                this.$store.dispatch("fetchDrawings");
                jsonResult = this.$store.state.drawings.find(
                    (obj) => obj.Id == this.getpictureID
                );
            }
            return jsonResult;
        },
    },
}