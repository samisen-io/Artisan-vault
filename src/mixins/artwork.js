export default {
    data() {
        return {
            pictureIdFromUrl: "",
            artworkTypeFromUrl: "",
        };
    },

    methods: {
        url: function() {
            var str = window.location.search;
            var val = str.split("?").pop();
            this.pictureIdFromUrl = str.split("=").pop();
            this.artworkTypeFromUrl = val.substring(0, val.indexOf("="));
        },
    },
    mounted() {
        this.url();
    },
    computed: {
        artwork() {
            var jsonResult;
            if (this.artworkTypeFromUrl == "featureArtworkId") {
                this.$store.dispatch("fetchFeatureds");
                jsonResult = this.$store.state.featureds.find(
                    (obj) => obj.Id == this.pictureIdFromUrl
                );
            } else if (this.artworkTypeFromUrl == "highestPaidId") {
                this.$store.dispatch("fetchHighestPaids");
                jsonResult = this.$store.state.highestpaids.find(
                    (obj) => obj.Id == this.pictureIdFromUrl
                );
            } else if (this.artworkTypeFromUrl == "topArtistsId") {
                this.$store.dispatch("fetchTopArtists");
                jsonResult = this.$store.state.topartists.find(
                    (obj) => obj.Id == this.pictureIdFromUrl
                );
            } else if (this.artworkTypeFromUrl == "digitalArtworkId") {
                this.$store.dispatch("fetchDigitals");
                jsonResult = this.$store.state.digitals.find(
                    (obj) => obj.Id == this.pictureIdFromUrl
                );
            } else if (this.artworkTypeFromUrl == "craftArtworkId") {
                this.$store.dispatch("fetchCrafts");
                jsonResult = this.$store.state.crafts.find(
                    (obj) => obj.Id == this.pictureIdFromUrl
                );
            } else if (this.artworkTypeFromUrl == "photographyArtworkId") {
                this.$store.dispatch("fetchPhotographys");
                jsonResult = this.$store.state.photographys.find(
                    (obj) => obj.Id == this.pictureIdFromUrl
                );
            } else if (this.artworkTypeFromUrl == "sculptureArtworkId") {
                this.$store.dispatch("fetchSculptures");
                jsonResult = this.$store.state.sculptures.find(
                    (obj) => obj.Id == this.pictureIdFromUrl
                );
            } else if (this.artworkTypeFromUrl == "drawingArtworkId") {
                this.$store.dispatch("fetchDrawings");
                jsonResult = this.$store.state.drawings.find(
                    (obj) => obj.Id == this.pictureIdFromUrl
                );
            }
            return jsonResult;
        },
    },
}