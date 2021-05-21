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
        artwork() {
            var artworkObj;
            if (this.queryType == "featureArtworkId") {
                this.$store.dispatch("fetchFeatureds");
                artworkObj = this.$store.state.featureds.find(
                    (obj) => obj.Id == this.id
                );
            } else if (this.queryType == "highestPaidId") {
                this.$store.dispatch("fetchHighestPaids");
                artworkObj = this.$store.state.highestpaids.find(
                    (obj) => obj.Id == this.id
                );
            } else if (this.queryType == "topArtistsId") {
                this.$store.dispatch("fetchtopArtists");
                artworkObj = this.$store.state.topArtists.find(
                    (obj) => obj.Id == this.id
                );
            } else if (this.queryType == "digitalArtworkId") {
                this.$store.dispatch("fetchDigitals");
                artworkObj = this.$store.state.digitals.find(
                    (obj) => obj.Id == this.id
                );
            } else if (this.queryType == "craftArtworkId") {
                this.$store.dispatch("fetchCrafts");
                artworkObj = this.$store.state.crafts.find(
                    (obj) => obj.Id == this.id
                );
            } else if (this.queryType == "photographyArtworkId") {
                this.$store.dispatch("fetchPhotographys");
                artworkObj = this.$store.state.photographys.find(
                    (obj) => obj.Id == this.id
                );
            } else if (this.queryType == "sculptureArtworkId") {
                this.$store.dispatch("fetchSculptures");
                artworkObj = this.$store.state.sculptures.find(
                    (obj) => obj.Id == this.id
                );
            } else if (this.queryType == "drawingArtworkId") {
                this.$store.dispatch("fetchDrawings");
                artworkObj = this.$store.state.drawings
            }
            return artworkObj;
        },
    },
}