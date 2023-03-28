<template>
    <div class="login-form-box">
        <h3 class="title"></h3>
        <form>
            <div class="form-group">
                <label for="current-log-email">Numéro Personnel d'Identification (NPI)*</label>
                <input type="email" name="current-log-email" id="current-log-email" placeholder="Numéro IPN">
            </div>
            <div class="form-group">
                <label for="current-log-password">Mot de passe*</label>
                <input type="password" name="current-log-password" id="current-log-password" placeholder="Password">
                <span class="password-show"><i class="icon-76"></i></span>
            </div>
            <div class="form-group chekbox-area">
                <div class="edu-form-check">
                <input type="checkbox" id="remember-me">
                <label for="remember-me">Se souvenir de moi</label>
                </div>
                <a href="#" class="password-reset">Mot de passe oublié</a>
            </div>
            <div class="form-group">
                <button type="button" class="edu-btn btn-medium">Suivant <i class="icon-4"></i></button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        components: {
            SectionTitle: () => import('@/components/common/SectionTitle')
        },
        data() {
            return {
                categories: [
                    {
                        title: "Ministère de l'enseignement",
                        iconClass: "icon-9",
                        colorClass: "color-primary-style"
                    },
                    {
                        title: "Ministère de l'éducation",
                        iconClass: "icon-10",
                        colorClass: "color-secondary-style"
                    },
                    {
                        title: "Ministère de la santé",
                        iconClass: "icon-11",
                        colorClass: "color-extra04-style"
                    },
                    {
                        title: "Ministère du tourisme",
                        iconClass: "icon-12",
                        colorClass: "color-tertiary-style"
                    },
                    {
                        title: "Ministère des forces armées",
                        iconClass: "icon-13",
                        colorClass: "color-extra02-style"
                    },
                    {
                        title: "Ministére de la recherche",
                        iconClass: "icon-42",
                        colorClass: "color-extra07-style",
                        extraClass: "design-pencil-icon"
                    },
                    {
                        title: "Ministére des finances",
                        iconClass: "icon-14",
                        colorClass: "color-extra06-style"
                    },
                    {
                        title: "Ministère de l'economie",
                        iconClass: "icon-16",
                        colorClass: "color-extra03-style",
                        extraClass: "laptop-icon"
                    },
                    {
                        title: "Ministère de l'urbanisme",
                        iconClass: "icon-17",
                        colorClass: "color-extra01-style"
                    },
                    {
                        title: "Ministère des transports",
                        iconClass: "icon-43",
                        colorClass: "color-extra05-style"
                    }
                ]
            }
        }
    }
</script>