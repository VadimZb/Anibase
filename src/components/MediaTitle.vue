<template>
    <div
        class="mb-3 text-center d-sm-none"
        :class="[mobile ? classMobile : classDefault]"
    >
        <h2 class="mb-3 text-h4 primary--text">
            {{ title }}
            <add-fav-btn
                v-if="this.$store.state.user.loggedIn"
                :type="type"
                :id="media.id"
                :fav="media.isFavourite"
            />
        </h2>

        <p class="secondary--text">
            {{ subtitle }}
        </p>
    </div>
</template>

<script>
import AddFavBtn from "../components/buttons/AddFavBtn";
export default {
    components: {
        AddFavBtn,
    },
    props: {
        media: {
            type: Object,
            required: true,
        },
        mobile: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            classMobile: {
                "mb-3": true,
                "text-center": true,
                "d-sm-none": true,
            },
            classDefault: {
                "mb-10": true,
                "text-center": true,
                "text-md-left": true,
                "d-none": true,
                "d-sm-block": true,
            },
        };
    },
    computed: {
        type() {
            // Characters dont have "type" key so any media without "type" will be character
            return "type" in this.media
                ? this.media.type.toLowerCase()
                : "characters";
        },
        title() {
            if (this.type !== "characters") {
                if (this.media.title.english) {
                    return this.media.title.english;
                } else {
                    return this.media.title.romaji;
                }
            } else {
                return Object.values(this.media.name)
                    .slice(0, -1)
                    .join(" ");
            }
        },
        subtitle() {
            if (this.type === "characters") {
                return this.media.name.native;
            } else {
                return this.media.title.native;
            }
        },
    },
};
</script>
