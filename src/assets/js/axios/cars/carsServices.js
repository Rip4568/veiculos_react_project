import api from '../api'

export const getCars = () => {
    return api.get('carros-model-viewsets/')
}