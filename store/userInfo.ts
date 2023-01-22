import { defineStore } from 'pinia';
interface ApiSpec {
  status: string;
  data?: any;
  message?: string;
}
interface GeoJSON {
  type: string;
  features: Array<{ properties: { title: string; image: string } }>;
}
export const useUserInfoStore = defineStore({
  id: 'userinfo-store',
  state: () => ({
    id: '',
    icon: '',
    name: '',
    email: '',
    token: '',
  }),
  actions: {
    async refreshUser() {
      if (!localStorage.getItem('token')) return;
      if (this.id) return;
      const config = useRuntimeConfig();
      const { data } = await useFetch<ApiSpec>(
        `${config.public.apiBase}/users/me`,
        {
          headers: {
            Authorization: `Token ${localStorage.getItem('token')}`,
          },
        }
      );
      if (!data.value || data.value!.status !== 'success') return;
      const { id, username, email } = data.value!.data;
      this.id = `${id}`;
      this.name = username;
      this.email = email;
    },
    async retrieveUserImage() {
      // workaround as long as icon is not in /users/me API
      if (!this.name) return;
      if (this.icon) return;
      const config = useRuntimeConfig();
      const { data } = await useFetch<GeoJSON>(
        `${config.public.apiBase}/users/locations`
      );

      if (!data.value || data.value.type !== 'FeatureCollection') return false;
      const user = data.value.features.find(
        (feature) => feature.properties.title == this.name
      );
      if (!user)
        this.icon = 'https://shadedoes3d.com/static/img/default_avatar.png';
      else this.icon = `https://shadedoes3d.com${user.properties.image}`;
      return this.icon;
    },
  },
});
