import unittest

import zscaler_config_services as config


class ZscalerConfigServiceTests(unittest.TestCase):
    def setUp(self):
        self.payload = {"zscaler.net": {"continent : EMEA": {"city : Stockholm III": [{"range": "165.225.192.0/23", "hostname": "sto3.sme.zscaler.net", "vpn": "sto3-vpn.zscaler.net", "gre": "165.225.192.12", "ext": "165.225.192.54", "latitude": "59.3", "longitude": "18.1"}]}}}
        self.index = {"data_centers": config.flatten_cenr(self.payload)}

    def test_flatten_and_search_preserve_endpoint_metadata(self):
        self.assertEqual(self.index["data_centers"][0]["city"], "Stockholm III")
        self.assertEqual(len(config.search_cenr(self.index, "sto3-vpn")), 1)

    def test_pac_references_match_hostname_and_ip_range(self):
        references = config.pac_config_references('return "PROXY sto3.sme.zscaler.net:80";\nreturn "PROXY 165.225.192.12:80";', self.index)
        self.assertEqual(references[1][0]["city"], "Stockholm III")
        self.assertEqual(references[2][0]["city"], "Stockholm III")

    def test_line_explanation_includes_safety_and_location_context(self):
        explanation = config.pac_line_explanation('return "DIRECT";', self.index["data_centers"])
        self.assertIn("bypasses Zscaler", explanation)
        self.assertIn("Stockholm III", explanation)


if __name__ == "__main__":
    unittest.main()
