//
//  String+Util.swift
//  UserPost
//
//  Created by Miguel Cazares on 1/21/18.
//  Copyright © 2018 Miguel Cazares. All rights reserved.
//

import UIKit

extension String {
    func camelCaseToDashCase() -> String {
        let pattern = "([a-z0-9])([A-Z])"
        
        let regex = try? NSRegularExpression(pattern: pattern, options: [])
        let range = NSRange(location: 0, length: length)
        if regex == nil {
            return defaultString
        }
        return regex!.stringByReplacingMatches(in: self, options: [], range: range, withTemplate: "$1-$2").lowercased()
    }
}
