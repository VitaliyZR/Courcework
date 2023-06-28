import { createRouter, createWebHashHistory } from 'vue-router';
import PropertyCitiesTable from '@/components/PropertyCitiesTable.vue';
import ClientsTable from '@/components/ClientsTable.vue';
import PropertyStatus from '@/components/PropertyStatus.vue';
import PropertiesTable from '@/components/PropertiesTable.vue';
import AgentsTable  from './components/AgentsTable.vue';
import AdvertisementsTable from './components/AdvertisementsTable.vue';
import RentalItems  from './components/RentalItemsTable.vue';
import SalesDeals from './components/SalesDealsTable.vue';

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { 
            path: '/clients', component: ClientsTable 
        },
        { 
            path: '/property-cities', component: PropertyCitiesTable 
        },
        { 
            path: '/property-status', component: PropertyStatus 
        },
        { 
            path: '/properties', component: PropertiesTable 
        },
        { 
            path: '/agents', component: AgentsTable 
        },
        { 
            path: '/advertisements', component: AdvertisementsTable 
        },
        { 
            path: '/rental-contracts', component: RentalItems 
        },
        { 
            path: '/sales-deals', component: SalesDeals 
        },
    ]
})
