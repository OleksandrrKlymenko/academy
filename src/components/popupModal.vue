<template>
    <div class="popup__container">
        <slot></slot>
        <modal></modal>
    </div>
</template>

<style lang="scss">
    .modal__container {
        width: 94%;
    }
    .modal__container, .modal {
        height: min-content;
        padding: 0;
    }
    .popup__container {
        background-color: rgba(0, 0, 0, .6);
        position: absolute;
        left: 0; 
        top: 0;
        width: 100%;
        z-index: 7;
        height: 100%;
        .container {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }

    .bounce-enter-active {
        animation: bounce-in .25s ease-out both;
    }

    .bounce-leave-active {
        animation: bounce-in .25s reverse ease-in both;
    }

    @keyframes bounce-in {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 0.5;
        }
        100% {
            opacity: 1;
        }
    }
</style>

<script>
export default {
    name: 'popupModal',
}
</script>