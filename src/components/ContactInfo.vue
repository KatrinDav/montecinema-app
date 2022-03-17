<template>
    <div class="info-wrapper">
        <div class="info-wrapper__address">
          <div>
            <p>Monterail Sp. z o.o.</p>
            <p>ul. Olawska 27-29</p>
            <p>50-123 Wroclaw</p>
            <p>Poland</p>
          </div>
        </div>

        <div class="info-wrapper__email">
        <div>
             <p>hello@monterail.com</p>
        </div>
                   
        </div>
         <div class="info-wrapper__phone">
             <div>
                <p>+48 533 600 136</p>
             </div>
        </div>
       
    </div>
</template>

<script>
export default {
    name: "ContactInfo",
    
}
</script>

<style lang="scss">
.info-wrapper{
    width: 327px;
    height: 318px;
    background-color: $cl-athens-grey;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 25px;
 
    p {
       font-family: $ff-primary-alt;
       font-size: $fs-normal;
       line-height: 32px;
       letter-spacing: 1.5%;
       color: $cl-dark;
      
    }
      &__address div{
        position: relative;
        margin-left: 60px; 
      }

     &__email div{
         margin-left: 60px; 
         position: relative;
      }

     &__phone div{
         margin-left: 60px;
         position: relative;
     }
     
    &__address::before{
        content: url('../assets/location.svg');
        position: absolute;
    }

    &__email::before{
        content: url('../assets/email.svg');
         position: absolute;
    }

      &__phone::before{
        content: url('../assets/phone.svg');
        position: absolute;
    }
}
</style>