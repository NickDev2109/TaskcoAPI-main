const idAnalyzerV2 = require('@api/id-analyzer-v2');

// Initialize SDK with your API key
idAnalyzerV2.auth(process.env.ID_ANALYZER_API_KEY);

/**
 * Calls ID Analyzer QuickScan with a base64 image
 */
const postScan = async (documentBase64,faceBase64) => {
  const response = await idAnalyzerV2.postQuickscan({
    profile: process.env.ID_ANALYZER_PROFILE, 
    document: `data:image/jpeg;base64,${documentBase64}`, 
    face: `data:image/jpeg;base64,${faceBase64}`, 
  });
  return response.data;
};

module.exports = { postScan };
