import Vue from 'vue'
import Router from 'vue-router'

import Header from '../components/layout/Header.vue'
import Home from '../components/home/Home.vue'
import NotFound from '../components/notFound/NotFound.vue'
import Connections from '../components/connections/Connections.vue'
import FindLove from '../components/findLover/FindLover.vue'
import Dating from '../components/dating/Dating.vue'
import Signup from '../components/signup/Signup.vue'
import Signin from '../components/signin/Signin.vue'
import Profile from '../components/profile/Profile.vue'
import Edit from '../components/profile/Edit.vue'
import Cart from '../components/cart/Cart.vue'
import Payment from '../components/cart/Payment.vue'
import Seat from '../components/seat/Seat.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    components: {
      default: Home,
      'comp-header': Header
    }
  },
  {
    path: '/connections',
    name: 'connections',
    components: {
      default: Connections,
      'comp-header': Header
    }
  },
  {
    path: '/find-lover',
    name: 'find-love',
    components: {
      default: FindLove,
      'comp-header': Header
    }
  },
  {
    path: '/dating',
    name: 'dating',
    components: {
      default: Dating,
      'comp-header': Header
    }
  },
  {
    path: '/signup',
    name: 'signup',
    beforeEnter : guardMyroute,
    components: {
      default: Signup
    }
  },
  {
    path: '/signin',
    name: 'signin',
    beforeEnter : guardMyroute,
    components: {
      default: Signin
    }
  },
  {
    path: '/profile',
    name: 'profile',
    components: {
      default: Profile,
      'comp-header': Header
    }
  },
  {
    path: '/edit',
    name: 'edit',
    components: {
      default: Edit,
      'comp-header': Header
    }
  },
  {
    path: '/cart',
    name: 'cart',
    beforeEnter : guardMyroute,
    components: {
      default: Cart,
      'comp-header': Header
    }
  },
  {
    path: '/payment',
    name: 'payment',
    components: {
      default: Payment,
      'comp-header': Header
    }
  },
  {
    path: '/seat',
    name: 'seat',
    components: {
      default: Seat,
      'comp-header': Header
    }
  },
  {
    path: '/notFound',
    name: 'notFound',
    component: NotFound
  },
  {
    path: '*',
    redirect: 'notFound'
  }
]

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

function guardMyroute(to, from, next)
{
  var isAuthenticated = false;
  if(localStorage.getItem('token'))
    isAuthenticated = true;
  else
    isAuthenticated= false;
  if((isAuthenticated && to.name === "signin") || (isAuthenticated && to.name === "signup")) 
  {
    next('/');
  } 
  else if ((!isAuthenticated && to.name === "signin") || (!isAuthenticated && to.name === "signup"))
  {
    next();
  }
  else if (!isAuthenticated && to.name !== "signin") {
    next("/signin");
  }
  else {
    next();
  }
}

export default router;
