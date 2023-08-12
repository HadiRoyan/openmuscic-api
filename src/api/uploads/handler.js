const ClientError = require('../../exceptions/ClientError');

class UploadsHandler {
  constructor(storageService, albumService, validator) {
    this._storageService = storageService;
    this._albumService = albumService;
    this._validator = validator;

    this.postUploadCoverAlbumHandler = this.postUploadCoverAlbumHandler.bind(this);
  }

  async postUploadCoverAlbumHandler(request, h) {
    try {
      const { cover } = request.payload;
      const { id: albumId } = request.params;

      this._validator.validateImageHeaders(cover.hapi.headers);

      const filename = await this._storageService.writeFile(cover, cover.hapi);
      const coverUrl = `http://${process.env.HOST}:${process.env.PORT}/upload/images/${filename}`;

      await this._albumService.editCoverUrlAlbum(albumId, coverUrl);

      const response = h.response({
        status: 'success',
        message: 'Sampul berhasil diunggah',
      });
      response.code(201);
      return response;
    } catch (error) {
      if (error instanceof ClientError) {
        const response = h.response({
          status: 'fail',
          message: error.message,
        });
        response.code(error.statusCode);
        return response;
      }
      // Server ERROR!
      const response = h.response({
        status: 'error',
        message: 'Maaf, terjadi kegagalan pada server kami.',
      });
      response.code(500);
      console.error(error);
      return response;
    }
  }
}

module.exports = UploadsHandler;
