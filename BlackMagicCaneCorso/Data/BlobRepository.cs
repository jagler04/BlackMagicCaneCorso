using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Blob;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace BlackMagicCaneCorso.Data
{
    public class BlobRepository
    {
        private readonly IConfiguration _configuration;
        private readonly string _blobConnectionString;
        public BlobRepository(IConfiguration config)
        {
            _configuration = config;
            _blobConnectionString = _configuration.GetConnectionString("AzureBlobConnectionString");
        }

        public async Task<bool> AddFile(string containerName, IFormFile file, string fileName)
        {
            CloudStorageAccount cloudStorageAccount = CloudStorageAccount.Parse(_blobConnectionString);
            CloudBlobClient cloudBlobClient = cloudStorageAccount.CreateCloudBlobClient();
            CloudBlobContainer cloudBlobContainer = cloudBlobClient.GetContainerReference(containerName.ToLower());
            if (await cloudBlobContainer.CreateIfNotExistsAsync())
            {
                await cloudBlobContainer.SetPermissionsAsync(new BlobContainerPermissions { PublicAccess = BlobContainerPublicAccessType.Blob });
            }

            CloudBlockBlob cbb = cloudBlobContainer.GetBlockBlobReference(fileName);
            cbb.Properties.ContentType = file.ContentType;

            try
            {
                await cbb.UploadFromStreamAsync(file.OpenReadStream());
            }
            catch
            {
                return false;
            }

            return true;
        }
        public async Task<bool> DeleteFile(string containerName, string fileName)
        {
            CloudStorageAccount cloudStorageAccount = CloudStorageAccount.Parse(_blobConnectionString);
            CloudBlobClient cloudBlobClient = cloudStorageAccount.CreateCloudBlobClient();
            CloudBlobContainer cloudBlobContainer = cloudBlobClient.GetContainerReference(containerName.ToLower());


            CloudBlockBlob cbb = cloudBlobContainer.GetBlockBlobReference(fileName);

            try
            {
                await cbb.DeleteAsync();
            }
            catch
            {
                return false;
            }

            return true;
        }
    }
}
