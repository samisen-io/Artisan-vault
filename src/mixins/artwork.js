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
            if (this.artworkTypeFromUrl == "featureartworkid") {
                this.$store.dispatch("fetchFeatureds");
                jsonResult = this.$store.state.featureds.find(
                    (obj) => obj.Id == this.pictureIdFromUrl
                );
            } else if (this.artworkTypeFromUrl == "highestpaidId") {
                this.$store.dispatch("fetchHighestpaids");
                jsonResult = this.$store.state.highestpaids.find(
                    (obj) => obj.Id == this.pictureIdFromUrl
                );
            } else if (this.artworkTypeFromUrl == "topartistsid") {
                this.$store.dispatch("fetchTopartists");
                jsonResult = this.$store.state.topartists.find(
                    (obj) => obj.Id == this.pictureIdFromUrl
                );
            } else if (this.artworkTypeFromUrl == "digitalartworkid") {
                this.$store.dispatch("fetchDigitals");
                jsonResult = this.$store.state.digitals.find(
                    (obj) => obj.Id == this.pictureIdFromUrl
                );
            } else if (this.artworkTypeFromUrl == "craftartworkid") {
                this.$store.dispatch("fetchCrafts");
                jsonResult = this.$store.state.crafts.find(
                    (obj) => obj.Id == this.pictureIdFromUrl
                );
            } else if (this.artworkTypeFromUrl == "photographyartworkid") {
                this.$store.dispatch("fetchPhotographys");
                jsonResult = this.$store.state.photographys.find(
                    (obj) => obj.Id == this.pictureIdFromUrl
                );
            } else if (this.artworkTypeFromUrl == "sculptureartworkid") {
                this.$store.dispatch("fetchSculptures");
                jsonResult = this.$store.state.sculptures.find(
                    (obj) => obj.Id == this.pictureIdFromUrl
                );
            } else if (this.artworkTypeFromUrl == "drawingartworkid") {
                this.$store.dispatch("fetchDrawings");
                jsonResult = this.$store.state.drawings.find(
                    (obj) => obj.Id == this.pictureIdFromUrl
                );
            }
            return jsonResult;
        },
    },
}